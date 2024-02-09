// import { NextRequest, NextResponse } from 'next/server';
//
import { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const lang = req.cookies.get('lang');

  if (lang === 'en') {
    // Если значение куки 'lang' равно 'en', добавляем префикс '/en' к маршруту
    req.url = `/en${req.url}`;
  }

  // Возвращаем обработку запроса
}
