import { text } from "stream/consumers"
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm"
import { Tag } from "./Tag"
import { join } from "path"

@Entity()
export class Article {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 100,
        comment: '文章标题'
    })
    title: string

    @Column({
        type: 'text',
        comment: '文章内容'
    })
    content: string

    @JoinTable({
        // name: 'article_tag'
    })
    @ManyToMany(() => Tag, tag => tag.articles)
    @JoinTable()
    tags: Tag[]
}
