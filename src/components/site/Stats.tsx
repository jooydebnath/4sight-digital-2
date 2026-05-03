import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const sv = useSpring(mv, { duration: 2000, bounce: 0 });

  useEffect(() => { if (inView) mv.set(to); }, [inView, mv, to]);
  useEffect(() => sv.on("change", (v) => {
    if (ref.current) ref.current.textContent = Math.round(v).toLocaleString() + suffix;
  }), [sv, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const stats = [
  { value: 320, suffix: "+", label: "Products shipped" },
  { value: 120, suffix: "+", label: "Enterprise clients" },
  { value: 99, suffix: "%", label: "Retention rate" },
  { value: 18, suffix: "", label: "Countries served" },
];

export function Stats() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 border-y border-border">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="py-10 px-6 text-center border-r border-border last:border-r-0 [&:nth-child(2)]:max-md:border-r-0 max-md:[&:nth-child(-n+2)]:border-b"
            >
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
