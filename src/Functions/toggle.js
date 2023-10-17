

function toggle(document_1, document_2) {
    if (document_1.className === "inactive") {
        document_1.className = document_1.id
        document_2.innerHTML = `expand_less`
    } else {
        document_1.className = "inactive"
        document_2.innerHTML = `expand_more`
    }

}

export default toggle;