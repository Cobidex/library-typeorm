import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private repo: Repository<Book>,
  ) {}

  async getAll(): Promise<Book[]> {
    const books = await this.repo.find();
    return books;
  }

  async getById(id: string): Promise<Book> {
    const book = await this.repo.findOne({ where: { id } });
    if (!book) throw new NotFoundException('Book not found');
    return book;
  }

  create(book: Book): Promise<Book> {
    const bookObj = this.repo.create({
      name: book.name,
      price: book.price,
      author: book.author,
    });

    return this.repo.save(bookObj);
  }

  async update(id: string, data: Book): Promise<Book> {
    const book = await this.repo.findOne({ where: { id } });
    if (!book) throw new NotFoundException('Book not found');
    const update = Object.assign(book, data);
    await this.repo.save(update);
    return update;
  }

  async delete(id: string): Promise<{ deleted: boolean }> {
    const book = await this.repo.findOne({ where: { id } });
    if (!book) throw new NotFoundException('Book not found');
    await this.repo.delete(book);
    return { deleted: true };
  }
}
