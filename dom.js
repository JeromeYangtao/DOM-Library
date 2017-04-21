window.$ = function(selectorOrNode) {
    let array = []

    if (typeof selectorOrNode === 'string') {
        let items = document.querySelectorAll(selectorOrNode)
        for (let i = 0; i < items.length; i++) {
            array.push(items[i])
        }
    } else if (selectorOrNode instanceof Element) {
        array.push(selectorOrNode)
    } else if (selectorOrNode instanceof Array) {
        for (let i = 0; i < selectorOrNode.length; i++) {
            if (!(selectorOrNode[i] instanceof Element)) {
                continue
            }
            array.push(selectorOrNode[i])
        }
    }


    array.on = function(eventType, fn) {
        for (let i = 0; i < array.length; i++) {
            array[i].addEventListener(eventType, fn)
        }
    }
    array.click = function(fn) {
        for (let i = 0; i < array.length; i++) {
            array[i].addEventListener('click', fn)
        }
    }

    array.addClass = function(className) {
        for (let i = 0; i < array.length; i++) {
            array[i].classList.add(className)
        }
        return array
    }
    array.removeClass = function(className) {
        for (let i = 0; i < array.length; i++) {
            array[i].classList.remove(className)
        }
        return array
    }

    array.text = function(textContent) {
        if (textContent === undefined) {
            return array[0].innerHTML
        } else {
            for (let i = 0; i < array.length; i++) {
                array[i].innerHTML = textContent
            }
            return array
        }
    }

    array.get = function(index) {
        return array[index]
    }

    array.siblings = function() {
        let resultArray = []
        let children = array[0].parentElement.children
        for (let i = 0; i < children.length; i++) {
            if (children[i] != array[0]) {
                resultArray.push(children[i])
            }
        }
        let items = $(resultArray)
        items.previousSelection = array
        return items
    }
    array.parent = function() {
        return array[0].parentElement
    }
    array.children = function() {
        return array[0].children
    }

    array.end = function() {
        return array.previousSelection
    }

    array.width = function(number) {
        if (number === undefined) {
            return array[0].offsetWidth

        } else if (typeof number === 'number') {
            for (let i = 0; i < array.length; i++) {
                array[i].style.width = `${number}px`
            }
        }
    }
    array.height = function(number) {
        if (number === undefined) {
            return array[0].offsetWidth

        } else if (typeof number === 'number') {
            for (let i = 0; i < array.length; i++) {
                array[i].style.height = `${number}px`
            }
        }
    }


    return array
}