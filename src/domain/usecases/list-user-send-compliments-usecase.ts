export abstract class ListUserSendComplimentsUseCase{
    list: (id_user: string) => Promise<any>
}