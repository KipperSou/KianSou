import { AnimatePresence, motion } from 'framer-motion'
import { withBase } from '@/utils/base'
import { useShouldHeaderMetaShow, useIsMobile } from './hooks'
import Config from '@/astro-obsidian.config'

const { author } = Config

export function AnimatedLogo() {
  const isMobile = useIsMobile()
  const shouldHeaderMetaShow = useShouldHeaderMetaShow()

  if (!isMobile) {
    return <Logo />
  }

  return (
    <AnimatePresence>
      {!shouldHeaderMetaShow && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <Logo />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Logo() {
  return (
    <a className="block" href={withBase('/')} title="Nav to home">
      <div className="size-[40px] rounded-2xl overflow-hidden border border-zinc-200 bg-white dark:border-zinc-700 dark:bg-slate-900">
        <img
          className="size-full select-none object-contain object-center p-1"
          src={withBase(author.avatar)}
          alt="Site owner avatar"
        />
      </div>
    </a>
  )
}
