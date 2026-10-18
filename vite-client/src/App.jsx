import { useEffect } from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home/Home'
import IndividualProject from './pages/IndividualProject/IndividualProject'
import Projects from './pages/Projects/Projects'

const App = () => {
  useEffect(() => {
    const revealRoot = document.body

    const revealSelector = '[data-reveal], .fade-in'
    if (typeof IntersectionObserver === 'undefined') {
      revealRoot.querySelectorAll(revealSelector).forEach((element) => {
        element.classList.add('is-visible')
      })
      return
    }

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          revealObserver.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -32px 0px' })

    const observeReveals = (root) => {
      if (root.matches?.(revealSelector)) revealObserver.observe(root)
      root.querySelectorAll?.(revealSelector).forEach((element) => {
        revealObserver.observe(element)
      })
    }

    observeReveals(revealRoot)
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof Element) observeReveals(node)
        })
      })
    })
    mutationObserver.observe(revealRoot, { childList: true, subtree: true })

    return () => {
      revealObserver.disconnect()
      mutationObserver.disconnect()
    }
  }, [])

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Navbar/>
        <main>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/project/:id' element={<IndividualProject/>} />
                <Route path='/projects/' element={<Projects/>} />
                {/* <Route path='*' element={<page404/>} /> for handling 404 page */}
            </Routes>
        </main>
    </BrowserRouter>
  )
}

export default App