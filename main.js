
(async () => {

    const scene = document.getElementById('scene')

    const updatePerspective = () => {
        scene.style.perspectiveOrigin = `50% calc(50% + ${window.scrollY}px)`
    }

    updatePerspective()
    document.addEventListener(
        'scroll', 
        updatePerspective,
        {capture: false, passive: true}
    )

})()