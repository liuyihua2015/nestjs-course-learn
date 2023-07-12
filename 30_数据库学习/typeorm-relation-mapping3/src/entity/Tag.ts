import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm"
import { Article } from "./Article"

@Entity()
export class Tag {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 100,
        comment: '标签名称'
    })

    name: string

    // 如果 tag 里也想有文章的引用呢？

    @ManyToMany(() => Article, article => article.tags)
    articles: Article[]



}
