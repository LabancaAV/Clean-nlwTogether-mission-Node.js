export abstract class ListUserReceiveComplimentsUseCase{
    list: (id_user: string) => Promise<any>
}