import { prop, getModelForClass, modelOptions } from '@typegoose/typegoose'

@modelOptions({
  schemaOptions: { timestamps: true },
})
export class Message {
  @prop({ required: true })
  body!: string

  @prop({ required: true })
  userId!: string
}

export const MessageModel = getModelForClass(Message)
