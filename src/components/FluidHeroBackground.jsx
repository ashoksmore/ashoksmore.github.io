/** Decorative animated mesh behind the home hero. Hidden from assistive tech. */
export default function FluidHeroBackground() {
  return (
    <div className="fluid-hero-bg" aria-hidden="true">
      <div className="fluid-hero-bg__base" />
      <div className="fluid-hero-bg__blob fluid-hero-bg__blob--1" />
      <div className="fluid-hero-bg__blob fluid-hero-bg__blob--2" />
      <div className="fluid-hero-bg__blob fluid-hero-bg__blob--3" />
      <div className="fluid-hero-bg__veil" />
    </div>
  );
}
