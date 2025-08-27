import axios from "axios";

export const deposit = async (id, depositValue) => {

    try {
        const result = await axios.put(` /api/wallet/${id}/deposit`, {
            depositValue: depositValue,
        })

        return result;

    } catch (error) {
        console.log(error);
    }

    return null;
}

export const withdraw = async (userId, withdrawValue) => {
    try {
        const result = await axios.put(`/api/wallet/${userId}/withdraw`, {
            withdrawValue: withdrawValue
        }, { status: 200 })

        return result;
    } catch (error) {
        console.error(error);
    }
}