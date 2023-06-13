const fieldsNotEmpty = (id !== '' && p !== '')
    const fieldsEmpty = (id === '' && p === '')
    const fieldsNotMatching = (id !== dbId && p !== dbPassword)
    const idErrorMsg = 'Introduce una identificacion'
    const pwErrorMsg = 'Introduce una contraseña'
    const validIdMsg = 'Introduce una identificación válida'
    const validPwMsg = 'Introduce una contraseña válida'
    const anyFieldEmpty = (id === '' || p === '')
    const idEmpty = (id === '')
    const pwEmpty = (p === '')
    const validId = (id === dbId)
    const validPw = (p === dbPw)
    const anyFieldInvalid = (!validId || !validPw)

    // Validating empty fields
    if (fieldsEmpty || fieldsNotMatching) {
        event.preventDefault()

        if (fieldsEmpty || anyFieldEmpty) {
            if (idEmpty) {
                errorIdField.innerHTML = idErrorMsg 
            }
            if (pwEmpty) {
                errorPwField.innerHTML = pwErrorMsg
            }
        }
    }

    // Validating not empty fields
    if (fieldsNotEmpty) {

        // stopping redirect
        if (anyFieldInvalid) {
            event.preventDefault()
        }

        // Adding error messages
        if (fieldsNotMatching) {
            if (!validId) {
                errorIdField.innerHTML = validIdMsg
            }
            if (!validPw) {
                errorPwField.innerHTML = validPwMsg
            }
        }
    }