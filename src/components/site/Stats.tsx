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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient font-display">
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
