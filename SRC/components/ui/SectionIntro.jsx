export function SectionIntro({ badge, title, description, center = false }) {
  return (
    <div className={center ? 'mx-auto max-w-4xl text-center' : 'max-w-4xl'}>
      <span className={`section-label ${center ? 'justify-center' : ''}`.trim()}>{badge}</span>
      <h2 className="mt-6 font-display text-3xl font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
        {description}
      </p>
    </div>
  )
}