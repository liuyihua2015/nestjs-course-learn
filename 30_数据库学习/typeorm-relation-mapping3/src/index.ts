import { AppDataSource } from "./data-source"
import { Article } from "./entity/Article";
import { Tag } from "./entity/Tag";

AppDataSource.initialize().then(async () => {

    // const a1 = new Article();
    // a1.title = 'aaaa';
    // a1.content = 'aaaaaaaaaa';

    // const a2 = new Article();
    // a2.title = 'bbbbbb';
    // a2.content = 'bbbbbbbbbb';

    // const t1 = new Tag();
    // t1.name = 'ttt1111';

    // const t2 = new Tag();
    // t2.name = 'ttt2222';

    // const t3 = new Tag();
    // t3.name = 'ttt33333';

    // a1.tags = [t1, t2];
    // a2.tags = [t1, t2, t3];

    const entityManager = AppDataSource.manager;

    // await entityManager.save(t1);
    // await entityManager.save(t2);
    // await entityManager.save(t3);

    // await entityManager.save(a1);
    // await entityManager.save(a2);

    // const article = await entityManager.find(Article, {
    //     relations: {
    //         tags: true
    //     }
    // });

    // console.log(article);
    // console.log(article.map(item => item.tags))

    // 也可以手动用 query builder 来 join 查询：
    // const article = await entityManager
    //     .createQueryBuilder(Article, "a")
    //     .leftJoinAndSelect("a.tags", "t")
    //     .getMany()

    // console.log(article);
    // console.log(article.map(item => item.tags))


    // 那如果文章多加了一些标签或者删除了一些标签，怎么修改呢？

    // 比如我把 id 为 2 的文章的标签只保留包含 111 的，并且还改了标题：


    // const article = await entityManager.findOne(Article, {
    //     where: {
    //         id: 2
    //     },
    //     relations: {
    //         tags: true
    //     }
    // });

    // article.title = 'bbbccc';
    // article.tags = article.tags.filter(item => item.name.includes('111'));

    // await entityManager.save(article);


    // await entityManager.delete(Article, 1);

    // await entityManager.delete(Tag, 1);




    // const tags = await entityManager.find(Tag, {
    //     relations: {
    //         articles: true
    //     }
    // });

    // console.log(tags);

    const articles = await entityManager.find(Article, {
        relations: {
            tags: true
        }
    });

    console.log(articles);









}).catch(error => console.log(error))
