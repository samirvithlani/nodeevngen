const isEmpaty = (value) => {

    value = value.trim();

    if (value === ''|| value === null || value === undefined) {
        return false;
    }

    return true;

}
module.exports = {
    isEmpaty
}