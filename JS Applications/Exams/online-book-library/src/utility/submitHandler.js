export function submitHandler(handler) {
    return function(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = [...formData.values()].map(i => i.trim());
        handler(data, e);
    }
}