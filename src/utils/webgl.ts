let webGLSupported: boolean | undefined;

export const isWebGLAvailable = () => {
  if (typeof document === 'undefined') return false;
  if (webGLSupported !== undefined) return webGLSupported;

  try {
    const canvas = document.createElement('canvas');
    webGLSupported = Boolean(
      canvas.getContext('webgl2') ||
        canvas.getContext('webgl') ||
        canvas.getContext('experimental-webgl')
    );
  } catch {
    webGLSupported = false;
  }

  return webGLSupported;
};
