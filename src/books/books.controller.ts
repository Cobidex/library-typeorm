import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './book.entity';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BooksController {
  constructor(private bookService: BooksService) {}

  @Post()
  createBook(@Body() createBookDto: CreateBookDto): Promise<Book> {
    return this.bookService.create(createBookDto);
  }

  @Get()
  getAllBooks(): Promise<Book[]> {
    return this.bookService.getAll();
  }

  @Get(':id')
  getBookById(@Param('id') id: string): Promise<Book> {
    return this.bookService.getById(id);
  }

  @Put(':id')
  updateBookById(
    @Param('id') id: string,
    @Body() updateBookDto: UpdateBookDto,
  ): Promise<Book> {
    return this.bookService.update(id, updateBookDto);
  }

  @Delete(':id')
  DeleteById(@Param('id') id: string): Promise<{deleted: boolean }> {
    return this.bookService.delete(id);
  }
}
