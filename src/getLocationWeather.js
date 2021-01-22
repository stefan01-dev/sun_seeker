
export default async location => {
    try {
        const result = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=e66e299afb2ec32c804c326c2d169257&units=metric`,
        );

        if (result.status === 200) {
            return { success: true, data: await result.json() };
        }

        return { success: false, error: result.statusText };
    } catch (ex) {
        return { success: false, error: ex.message };
    }
};
