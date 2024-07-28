import { Ref, prop, getModelForClass, modelOptions } from '@typegoose/typegoose'
import {User} from '@/models/User';

@modelOptions({
  schemaOptions: { timestamps: true },
})
export class Message {
  @prop({ required: true })
  body!: string

  @prop({ required: true, ref: () => User })
  user!:Ref<User>

}

export const MessageModel = getModelForClass(Message)
