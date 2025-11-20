function isMinnesotaZip(code) {
    code = Number(code)
    if (isNaN(code)) return false
    return code >= 55001 && code <= 56763
}

console.log(isMinnesotaZip("55403"))
