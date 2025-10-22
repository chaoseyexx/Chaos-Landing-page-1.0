export function Stats() {
  const stats = [
    { value: "10M+", label: "Active Users", company: "Worldwide" },
    { value: "99.9%", label: "Uptime SLA", company: "Guaranteed" },
    { value: "50ms", label: "Response Time", company: "Average" },
    { value: "150+", label: "Countries", company: "Global Reach" },
  ]

  return (
    <section className="py-20 lg:py-32 border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="text-4xl lg:text-5xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground mb-1">{stat.label}</div>
              <div className="text-xs text-muted-foreground/60">{stat.company}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
