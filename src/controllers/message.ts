import { Body, Controller, Delete, Get, Params, Post, Put } from 'amala'
import { MessageModel } from '@/models/Message'

@Controller('/messages')
export default class MessageController {
  @Post('/')
  async createMessage(@Body() { body, userId }: { body: string, userId: string }) {
    const message = new MessageModel({ body, userId })
    await message.save()
    return message
  }

  @Get('/')
  async getMessages() {
    return await MessageModel.find()
  }

  @Get('/:id')
  async getMessage(@Params('id') id: string) {
    return await MessageModel.findById(id)
  }

  @Put('/:id')
  async updateMessage(@Params('id') id: string, @Body() { content }: { content: string }) {
    return await MessageModel.findByIdAndUpdate(id, { content }, { new: true })
  }

  @Delete('/:id')
  async deleteMessage(@Params('id') id: string) {
    return await MessageModel.findByIdAndDelete
  }
}
