import {emailAdapter} from "../adapters/email-adapter";

export const emailManager = {
    async sendEmailRecoveryMessage(user: any){
        await emailAdapter.sendEmail(user.email, "password recovery", "")
    },

    // async sendEmailConfirmationMessage(user: any){
    //     const confirmationCode = '<a href="https://some-front.com/confirm-registration?code=' + user.confirmationCode + '">complete registration</a>'
    //     await emailAdapter.sendEmail(user.email, "confirmation code", confirmationCode)
    // },

    async sendEmailConfirmationMessage(user: any){
        const confirmationCode = `<a href="https://some-front.com/confirm-registration?code=${user.confirmationCode}">complete registration</a>`
        await emailAdapter.sendEmail(user.email, "confirmation code", confirmationCode)
    },

    // async sendEmailConfirmationMessage(user: any){
    //     const confirmationCode = 'https://some-front.com/confirm-registration?code=' + user.confirmationCode
    //     await emailAdapter.sendEmail(user.email, "confirmation code", confirmationCode)
    // },

    async resendEmailConfirmationMessage(refreshConfirmationData: any){
        const confirmationCode = '<a href="https://some-front.com/confirm-registration?code=' + refreshConfirmationData.confirmationCode + '">complete registration</a>'
        await emailAdapter.sendEmail(refreshConfirmationData.email, "resending confirmation code", confirmationCode)
    },

    // async resendEmailConfirmationMessage(refreshConfirmationData: any){
    //     const confirmationCode = '<a href="https://some-front.com/confirm-registration?code=${refreshConfirmationData.confirmationCode}">complete registration</a>'
    //     await emailAdapter.sendEmail(refreshConfirmationData.email, "resending confirmation code", confirmationCode)
    // }

    // async resendEmailConfirmationMessage(refreshConfirmationData: any){
    //     const confirmationCode = 'https://some-front.com/confirm-registration?code=' + refreshConfirmationData.confirmationCode
    //     await emailAdapter.sendEmail(refreshConfirmationData.email, "resending confirmation code", confirmationCode)
    // }
}
