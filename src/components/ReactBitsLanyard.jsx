/* eslint-disable react/no-unknown-property */
'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { useGLTF, useTexture, Environment, Lightformer } from '@react-three/drei';
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint } from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';

const cardGLB = '/card.glb';
const lanyard = '/lanyard.png';

import * as THREE from 'three';
import './Lanyard.css';

extend({ MeshLineGeometry, MeshLineMaterial });

// 1x1 transparent pixel — lets useTexture be called unconditionally when a
// front/back image isn't supplied.
const BLANK_PIXEL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';

// The card model's front face is UV-mapped to the LEFT half of the texture
// atlas and the back face to the RIGHT half (measured from card.glb). Each
// custom image is composited into its own half so the two faces render
// independently, aspect-preserving (no stretching).
const FRONT_UV_RECT = { x: 0, y: 0, w: 0.5, h: 0.755 };
const BACK_UV_RECT = { x: 0.5, y: 0, w: 0.5, h: 0.757 };

export default function Lanyard({
  position = [0, 0.15, 13.5],
  gravity = [0, -40, 0],
  fov = 20,
  transparent = true,
  frontImage = null,
  backImage = null,
  imageFit = 'cover',
  lanyardImage = null,
  lanyardWidth = 0.60
}) {
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth <= 890);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 890);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="lanyard-wrapper">
      <Canvas
        camera={{ position: isMobile ? [0, 0.15, 6] : position, fov: isMobile ? 40 : fov }}
        dpr={[1, 1.5]}
        gl={{ alpha: transparent, antialias: true, powerPreference: 'high-performance' }}
        onCreated={({ gl }) => gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1)}
      >
        <ambientLight intensity={Math.PI} />
        <Physics gravity={gravity} timeStep={1 / 60}>
          <Band
            isMobile={isMobile}
            frontImage={frontImage}
            backImage={backImage}
            imageFit={imageFit}
            lanyardImage={lanyardImage}
            lanyardWidth={lanyardWidth}
          />
        </Physics>
        <Environment blur={0.75}>
          <Lightformer
            intensity={2}
            color="white"
            position={[0, -1, 5]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[-1, -1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[1, 1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={10}
            color="white"
            position={[-10, 0, 14]}
            rotation={[0, Math.PI / 2, Math.PI / 3]}
            scale={[100, 10, 1]}
          />
        </Environment>
      </Canvas>
    </div>
  );
}
function Band({
  maxSpeed = 50,
  minSpeed = 0,
  isMobile = false,
  frontImage = null,
  backImage = null,
  imageFit = 'cover',
  lanyardImage = null,
  lanyardWidth = 0.38
}) {
  const band = useRef(),
    fixed = useRef(),
    j1 = useRef(),
    j2 = useRef(),
    j3 = useRef(),
    card = useRef();
  const vec = new THREE.Vector3(),
    ang = new THREE.Vector3(),
    rot = new THREE.Vector3(),
    dir = new THREE.Vector3();
  const segmentProps = { type: 'dynamic', canSleep: true, colliders: false, angularDamping: 4, linearDamping: 4 };
  const { nodes, materials } = useGLTF(cardGLB);
  const texture = useTexture(lanyardImage || lanyard);
  const frontTex = useTexture(frontImage || BLANK_PIXEL);
  const backTex = useTexture(backImage || BLANK_PIXEL);

  // Composite front (white border photo) & back (relevant credentials & tech)
  const cardMap = useMemo(() => {
    const baseMap = materials.base.map;
    if (!frontImage && !backImage) return baseMap;

    const baseImg = baseMap.image;
    const W = baseImg.width;
    const H = baseImg.height;
    const canvas = document.createElement('canvas');
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext('2d');
    if (!ctx) return baseMap;

    ctx.drawImage(baseImg, 0, 0, W, H);

    // 1. FRONT FACE: Photo with Crisp White Border
    if (frontImage && frontTex.image) {
      const rx = FRONT_UV_RECT.x * W;
      const ry = FRONT_UV_RECT.y * H;
      const rw = FRONT_UV_RECT.w * W;
      const rh = FRONT_UV_RECT.h * H;

      ctx.save();
      ctx.beginPath();
      ctx.rect(rx, ry, rw, rh);
      ctx.clip();

      // Deep dark badge background
      ctx.fillStyle = '#070b14';
      ctx.fillRect(rx, ry, rw, rh);

      // White Border Photo Frame
      const padX = rw * 0.08;
      const padTop = rh * 0.06;
      const frameW = rw - padX * 2;
      const frameH = rh * 0.65;
      const borderWidth = Math.max(12, Math.round(W * 0.016)); // Prominent crisp white border!

      // Outer White Frame
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(rx + padX, ry + padTop, frameW, frameH);

      // Photo drawn inside white frame
      const imgX = rx + padX + borderWidth;
      const imgY = ry + padTop + borderWidth;
      const imgW = frameW - borderWidth * 2;
      const imgH = frameH - borderWidth * 2;

      ctx.save();
      ctx.beginPath();
      ctx.rect(imgX, imgY, imgW, imgH);
      ctx.clip();

      const img = frontTex.image;
      const scale = Math.max(imgW / img.width, imgH / img.height);
      const dw = img.width * scale;
      const dh = img.height * scale;
      const dx = imgX + (imgW - dw) / 2;
      const dy = imgY + (imgH - dh) / 2;
      ctx.drawImage(img, dx, dy, dw, dh);
      ctx.restore();

      // Front Text beneath photo
      ctx.fillStyle = '#ffffff';
      ctx.font = `bold ${Math.round(W * 0.034)}px "Plus Jakarta Sans", sans-serif`;
      ctx.textAlign = 'center';
      ctx.fillText('RAHAJENG EKA W.', rx + rw / 2, ry + padTop + frameH + rh * 0.09);

      ctx.fillStyle = '#38bdf8';
      ctx.font = `bold ${Math.round(W * 0.021)}px "Plus Jakarta Sans", sans-serif`;
      ctx.fillText('SOFTWARE ENGINEER', rx + rw / 2, ry + padTop + frameH + rh * 0.15);

      ctx.fillStyle = '#94a3b8';
      ctx.font = `600 ${Math.round(W * 0.017)}px "Plus Jakarta Sans", sans-serif`;
      ctx.fillText('UNIVERSITAS BRAWIJAYA', rx + rw / 2, ry + padTop + frameH + rh * 0.20);

      ctx.restore();
    }

    // 2. BACK FACE: Relevant Tech & Credential Text (No Duplicate Photo!)
    const bx = BACK_UV_RECT.x * W;
    const by = BACK_UV_RECT.y * H;
    const bw = BACK_UV_RECT.w * W;
    const bh = BACK_UV_RECT.h * H;

    ctx.save();
    ctx.beginPath();
    ctx.rect(bx, by, bw, bh);
    ctx.clip();

    ctx.fillStyle = '#060a14';
    ctx.fillRect(bx, by, bw, bh);

    // Accent line at top
    ctx.fillStyle = '#2563eb';
    ctx.fillRect(bx, by, bw, Math.round(bh * 0.04));

    // Badge Title
    const leftMargin = bx + bw * 0.1;
    let curY = by + bh * 0.13;
    ctx.fillStyle = '#38bdf8';
    ctx.font = `bold ${Math.round(W * 0.02)}px monospace`;
    ctx.textAlign = 'left';
    ctx.fillText('✦ DEVELOPER IDENTITY BADGE', leftMargin, curY);

    // Full Name
    curY += bh * 0.085;
    ctx.fillStyle = '#ffffff';
    ctx.font = `bold ${Math.round(W * 0.035)}px "Plus Jakarta Sans", sans-serif`;
    ctx.fillText('RAHAJENG EKA', leftMargin, curY);
    curY += bh * 0.055;
    ctx.fillText('WAHYUNINGTIYAS', leftMargin, curY);

    // Role
    curY += bh * 0.07;
    ctx.fillStyle = '#38bdf8';
    ctx.font = `bold ${Math.round(W * 0.023)}px "Plus Jakarta Sans", sans-serif`;
    ctx.fillText('Software & Mobile Engineer', leftMargin, curY);

    // Divider line
    curY += bh * 0.035;
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.35)';
    ctx.lineWidth = Math.max(1, Math.round(W * 0.002));
    ctx.beginPath();
    ctx.moveTo(leftMargin, curY);
    ctx.lineTo(bx + bw * 0.9, curY);
    ctx.stroke();

    // Details
    curY += bh * 0.065;
    ctx.fillStyle = '#cbd5e1';
    ctx.font = `${Math.round(W * 0.018)}px "Plus Jakarta Sans", sans-serif`;
    ctx.fillText('Univ: Universitas Brawijaya', leftMargin, curY);

    curY += bh * 0.045;
    ctx.fillText('Program: S1 Teknik Informatika', leftMargin, curY);

    curY += bh * 0.045;
    ctx.fillText('Domain: Web & Mobile Systems', leftMargin, curY);

    curY += bh * 0.045;
    ctx.fillText('Location: Malang, Indonesia', leftMargin, curY);

    // Skills
    curY += bh * 0.07;
    ctx.fillStyle = '#38bdf8';
    ctx.font = `bold ${Math.round(W * 0.019)}px monospace`;
    ctx.fillText('TECH ARSENAL:', leftMargin, curY);

    curY += bh * 0.05;
    ctx.fillStyle = '#f8fafc';
    ctx.font = `600 ${Math.round(W * 0.019)}px "Plus Jakarta Sans", sans-serif`;
    ctx.fillText('React.js · Flutter · Laravel · Figma', leftMargin, curY);

    // Bottom Barcode & ID
    curY = by + bh * 0.86;
    ctx.fillStyle = '#64748b';
    ctx.font = `${Math.round(W * 0.016)}px monospace`;
    ctx.fillText('CLEARANCE ID: REW-2026-ENG', leftMargin, curY);

    const barY = by + bh * 0.89;
    const barH = bh * 0.055;
    ctx.fillStyle = '#ffffff';
    let curBarX = leftMargin;
    const endBarX = bx + bw * 0.9;
    let step = 0;
    while (curBarX < endBarX) {
      const barWidth = (step % 3 === 0 ? 3 : step % 2 === 0 ? 2 : 1) * Math.max(1, Math.round(W * 0.002));
      ctx.fillRect(curBarX, barY, barWidth, barH);
      curBarX += barWidth + (step % 4 === 0 ? 3 : 2) * Math.max(1, Math.round(W * 0.002));
      step++;
    }

    ctx.restore();

    const composite = new THREE.CanvasTexture(canvas);
    composite.colorSpace = THREE.SRGBColorSpace;
    composite.flipY = baseMap.flipY;
    composite.anisotropy = 16;
    composite.needsUpdate = true;
    return composite;
  }, [frontImage, backImage, imageFit, frontTex, backTex, materials.base.map]);
  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()])
  );
  const [dragged, drag] = useState(false);
  const [hovered, hover] = useState(false);

  const segLen = isMobile ? 0.80 : 0.50;
  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], segLen]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], segLen]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], segLen]);
  useSphericalJoint(j3, card, [
    [0, 0, 0],
    [0, 1.25, 0]
  ]);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? 'grabbing' : 'grab';
      return () => void (document.body.style.cursor = 'auto');
    }
  }, [hovered, dragged]);

  useFrame((state, delta) => {
    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach(ref => ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({ x: vec.x - dragged.x, y: vec.y - dragged.y, z: vec.z - dragged.z });
    }
    if (fixed.current) {
      [j1, j2].forEach(ref => {
        if (!ref.current.lerped) ref.current.lerped = new THREE.Vector3().copy(ref.current.translation());
        const clampedDistance = Math.max(0.1, Math.min(1, ref.current.lerped.distanceTo(ref.current.translation())));
        ref.current.lerped.lerp(
          ref.current.translation(),
          delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed))
        );
      });
      curve.points[0].copy(j3.current.translation());
      curve.points[1].copy(j2.current.lerped);
      curve.points[2].copy(j1.current.lerped);
      curve.points[3].copy(fixed.current.translation());
      band.current.geometry.setPoints(curve.getPoints(isMobile ? 12 : 28));
      ang.copy(card.current.angvel());
      rot.copy(card.current.rotation());
      card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });
    }
  });

  curve.curveType = 'chordal';
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  return (
    <>
      <group position={[0, 2.85, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody position={[0.35, 0, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.08]} />
        </RigidBody>
        <RigidBody position={[0.7, 0, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.08]} />
        </RigidBody>
        <RigidBody position={[1.05, 0, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.08]} />
        </RigidBody>
        <RigidBody position={[1.4, 0, 0]} ref={card} {...segmentProps} type={dragged ? 'kinematicPosition' : 'dynamic'}>
          <CuboidCollider args={[0.85, 1.18, 0.02]} />
          <group
            scale={2.3}
            position={[0, -1.2, -0.05]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={e => (e.target.releasePointerCapture(e.pointerId), drag(false))}
            onPointerDown={e => (
              e.target.setPointerCapture(e.pointerId),
              drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation())))
            )}
          >
            <mesh geometry={nodes.card.geometry}>
              <meshPhysicalMaterial
                map={cardMap}
                map-anisotropy={16}
                clearcoat={1}
                clearcoatRoughness={0.15}
                roughness={0.9}
                metalness={0.8}
              />
            </mesh>
            <mesh geometry={nodes.clip.geometry} material={materials.metal} material-roughness={0.3} />
            <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
          </group>
        </RigidBody>
      </group>
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          color="white"
          depthTest={false}
          resolution={isMobile
            ? [typeof window !== 'undefined' ? window.innerWidth : 390, typeof window !== 'undefined' ? window.innerHeight : 844]
            : [1000, 1000]}
          useMap
          map={texture}
          repeat={[-4, 1]}
          lineWidth={isMobile ? lanyardWidth * 0.38 : lanyardWidth}
        />
      </mesh>
    </>
  );
}
