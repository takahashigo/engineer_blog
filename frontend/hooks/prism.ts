import { useEffect } from 'react';
import Prism from 'prismjs';

export function useHighLight() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
}
