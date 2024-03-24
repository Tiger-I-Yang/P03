
(async () => {

    const updatePerspective = () => {
        document.body.style.perspectiveOrigin = `${window.innerWidth/2 + window.scrollX}px ${window.innerHeight/2 + window.scrollY}px`
    }

    updatePerspective()
    document.addEventListener(
        'scroll', 
        updatePerspective,
        {capture: false, passive: true}
    )
    window.addEventListener(
        'resize', 
        updatePerspective,
        {capture: true, passive: true}
    )

	

})()