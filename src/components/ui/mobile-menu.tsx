import { Sheet, SheetContent, SheetTrigger } from "./sheet";
import { motion, AnimatePresence, easeInOut } from "framer-motion";

export default function MobileMenu(props: boolean) {
  const { open }: boolean = props;
  const duration: number = 0.3;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="mobileMenu"
          transition={{ ease: easeInOut }}
          initial={{ y: -1000 }}
          animate={{ y: 0 }}
          exit={{ y: -1000 }}
          className="z-40 fixed inset-0  flex items-center justify-center bg-background min-h-screen"
        >
          test
        </motion.div>
      )}
    </AnimatePresence>
  );
}
