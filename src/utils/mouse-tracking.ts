
export const trackMouseMovement = (callback: (x: number, y: number) => void) => {
  const handleMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event;
    const x = clientX / window.innerWidth;
    const y = clientY / window.innerHeight;
    callback(x, y);
  };
  
  window.addEventListener('mousemove', handleMouseMove);
  
  return () => {
    window.removeEventListener('mousemove', handleMouseMove);
  };
};

export const createMouseFollower = (options: {
  container: HTMLElement;
  size?: number;
  color?: string;
  delay?: number;
  opacity?: number;
  blur?: number;
}) => {
  const {
    container,
    size = 30,
    color = 'rgba(0, 243, 255, 0.5)',
    delay = 0.08,
    opacity = 0.7,
    blur = 10
  } = options;
  
  // Create follower element
  const follower = document.createElement('div');
  follower.style.position = 'fixed';
  follower.style.width = `${size}px`;
  follower.style.height = `${size}px`;
  follower.style.borderRadius = '50%';
  follower.style.backgroundColor = color;
  follower.style.opacity = opacity.toString();
  follower.style.pointerEvents = 'none';
  follower.style.filter = `blur(${blur}px)`;
  follower.style.transition = `transform ${delay}s ease-out`;
  follower.style.zIndex = '9999';
  follower.style.transform = 'translate(-50%, -50%)';
  
  container.appendChild(follower);
  
  let mouseX = 0;
  let mouseY = 0;
  
  // Update follower position
  const updatePosition = () => {
    if (follower) {
      follower.style.left = `${mouseX}px`;
      follower.style.top = `${mouseY}px`;
    }
  };
  
  // Track mouse movement
  const handleMouseMove = (event: MouseEvent) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    updatePosition();
  };
  
  window.addEventListener('mousemove', handleMouseMove);
  
  // Remove follower when not needed
  const cleanup = () => {
    window.removeEventListener('mousemove', handleMouseMove);
    if (follower && follower.parentElement) {
      follower.parentElement.removeChild(follower);
    }
  };
  
  return cleanup;
};
