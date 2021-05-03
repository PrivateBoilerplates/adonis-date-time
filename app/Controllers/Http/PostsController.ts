import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'

export default class PostsController {
  public async index({}: HttpContextContract) {
    const posts = await Post.all()

    return posts
  }

  public async store({ request }: HttpContextContract) {
    const data = request.only(['title'])
    const post = await Post.create(data)

    return post
  }

  public async update({ request, params }: HttpContextContract) {
    const data = request.only(['title'])
    const post = await Post.findOrFail(params.id)

    post.merge(data)

    await post.save()

    return post
  }
}
