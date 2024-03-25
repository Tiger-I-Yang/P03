
(async () => {

    const updatePerspective = () => {
        document.body.style.perspectiveOrigin = `50vw calc(40vh + ${window.scrollY}px)`
    }

    updatePerspective()
    document.addEventListener(
        'scroll', 
        updatePerspective,
        {capture: false, passive: true}
    )

	

})()