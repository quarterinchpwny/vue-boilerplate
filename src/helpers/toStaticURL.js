export const toStaticURL = (path) => {
    return `${import.meta.env.VITE_BASE_API_URL}/storage/${path}`;
};
