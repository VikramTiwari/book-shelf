export function animateBookIdle(mesh, time) {
    if (!mesh) return;

    const idleAngle = Math.sin(time * 0.8) * 0.15;
    
    // Determine target rotation base
    // If mesh has userData.targetRot, use that as the base (often 0 for selected state).
    // Otherwise, use current rotation (which might drift if we don't have a fixed base, 
    // but typically we want a base rotation).
    
    let baseRotY = mesh.rotation.y;
    
    // Check if there's a specific target rotation defined (e.g. from interaction)
    if (mesh.userData && mesh.userData.targetRot) {
        baseRotY = mesh.userData.targetRot.y;
    } else if (mesh.userData && mesh.userData.baseRotationY !== undefined) {
         // Fallback if we store initial rotation
         baseRotY = mesh.userData.baseRotationY;
    }

    // However, the Carousel logic was: 
    // targetRotY = targetRotationBase + idleAngle
    // mesh.rotation.y += (targetRotY - mesh.rotation.y) * 0.05
    
    // In Library, we want to oscillate around the "facing user" angle (0) when selected.
    
    const targetRotY = baseRotY + idleAngle;
    
    // Apply smooth interpolation
    mesh.rotation.y += (targetRotY - mesh.rotation.y) * 0.05;
}
