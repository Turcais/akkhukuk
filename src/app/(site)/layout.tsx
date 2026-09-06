import { SiteKabugu } from "@/components/layout/site-kabugu";

/** Site sayfalarinin ortak kabugu. */
export default function SiteYerlesimi({ children }: { children: React.ReactNode }) {
  return <SiteKabugu>{children}</SiteKabugu>;
}
