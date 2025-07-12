'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function StarField() {
  const starRef = useRef<THREE.Points>(null);

  const starCount = 5000;
  const positions = new Float32Array(starCount * 3);
  for (let i = 0; i < starCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 2000;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const material = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 1,
    sizeAttenuation: true,
    transparent: true,
    opacity: 0.6,
  });

  useFrame(() => {
    if (starRef.current) {
      starRef.current.rotation.y += 0.0005;
      starRef.current.rotation.x += 0.0002;
    }
  });

  return <points ref={starRef} geometry={geometry} material={material} />;
}

export default function Stars() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <StarField />
      </Canvas>
    </div>
  );
}
