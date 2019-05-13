export class NotifyOfSuccessAction {
  static readonly type = 'NotifyOfSuccess';
  readonly type = NotifyOfSuccessAction.type;

  constructor(public readonly message: string) { }
}

export class NotifyOfErrorAction {
  static readonly type = 'NotifyOfError';
  readonly type = NotifyOfErrorAction.type;

  constructor(public readonly message: string) { }
}

export type NotificationActions
  = NotifyOfSuccessAction
  | NotifyOfErrorAction;
