"use client";

import { Canvas } from "@react-three/fiber";
import { useUpdateMyPresence } from "@/liveblocks.config";
import { useRef } from "react";
import { Cursors } from "./Cursors";

export function CollaborativeApp() {
  const updateMyPresence = useUpdateMyPresence();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
    <Canvas
      ref={canvasRef}
      style={{ width: "100vw", height: "100vh" }}
      camera={{ position: [1, 1, 4.5] }}
    >
      <group
        onPointerMove={(event) => {
          const [x, y] = event.point.toArray();

          updateMyPresence({
            cursor: { x, y },
          });
        }}
      >
        <ambientLight intensity={0.1} />
        <directionalLight color="#fff" position={[1, 2, 3]} />
        <mesh>
          <planeGeometry args={[10, 6, 10]} />
          <meshStandardMaterial color="#555" />
        </mesh>
        <Cursors />
      </group>
    </Canvas>
  );
}
