
(async () => {

    document.addEventListener(
        'scroll', 
        () => {
			document.body.style.perspectiveOrigin = `${window.innerWidth/2 + window.scrollX}px ${window.innerHeight/2 + window.scrollY}px`
        },
        {capture: false, passive: true}
    )

	

})()