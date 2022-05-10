import { useEffect } from 'react';

// give a ref to this hook and be able to run "onClickOutside" whenever there is a click event outside of that element
// works only when the ref element is rendered
export function useClickOutside(ref, callback) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
}
