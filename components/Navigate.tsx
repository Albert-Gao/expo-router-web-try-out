import { useLink } from "expo-router";
import { useEffect } from "react";

export function Navigate({ href }: { href: string }) {
  const link = useLink();

  useEffect(() => {
    link.replace(href);
  }, [href, link]);

  return null;
}
