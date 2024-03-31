import { useEffect, useState } from "react";

function useMediaQuery(query: string): boolean {
  const getMatches = (query: string): boolean => {
    // Prevents SSR issues
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState<boolean>(false);

  function handleChange() {
    setMatches(getMatches(query));
  }

  useEffect(() => {
    // Define getMatches inside effect to ensure it's only called client-side
    const getMatches = (query: string): boolean => {
      return window.matchMedia(query).matches;
    };
  
    // Initial check on mount
    setMatches(getMatches(query));
  
    // Setup event listener
    const matchMedia = window.matchMedia(query);
    const handleChange = () => setMatches(getMatches(query));
  
    if (matchMedia.addListener) { // Deprecated but necessary for older browsers
      matchMedia.addListener(handleChange);
    } else {
      matchMedia.addEventListener("change", handleChange);
    }
  
    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange);
      } else {
        matchMedia.removeEventListener("change", handleChange);
      }
    };
  }, [query]);

  return matches;
}

export default useMediaQuery;
