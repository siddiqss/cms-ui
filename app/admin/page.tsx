import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Router } from "lucide-react";

export default function Admin() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 p-4 border-r">
        <div className="flex flex-col h-full">
          <button className="mb-4">
            <ArrowLeftIcon className="w-6 h-6" />
          </button>
          <nav className="flex-1 space-y-2">
            <h2 className="text-sm font-semibold text-muted-foreground">
              Collections
            </h2>
            <ul className="space-y-1">
              <li>
                <Link
                  href="/admin/users"
                  className="block py-2 text-sm"
                  prefetch={false}
                >
                  Users
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/posts"
                  className="block py-2 text-sm"
                  prefetch={false}
                >
                  Posts
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/comments"
                  className="block py-2 text-sm"
                  prefetch={false}
                >
                  Comments
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/categories"
                  className="block py-2 text-sm"
                  prefetch={false}
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/tags"
                  className="block py-2 text-sm"
                  prefetch={false}
                >
                  Tags
                </Link>
              </li>
            </ul>
          </nav>
          <button className="mt-auto">
            <LogOutIcon className="w-6 h-6" />
          </button>
        </div>
      </aside>
      <main className="flex-1 p-8">
        <header className="flex items-center justify-between mb-8">
          <LogInIcon className="w-8 h-8" />
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </header>
        <section>
          <h1 className="mb-8 text-3xl font-bold">Collections</h1>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <Card className="p-4 bg-muted">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Users</h2>
                <Link href="/admin/users">
                  <Button variant="ghost" size="icon">
                    <PlusIcon className="w-6 h-6" />
                  </Button>
                </Link>
              </div>
            </Card>
            <Card className="p-4 bg-muted">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Posts</h2>
                <Link href="/admin/posts">
                  <Button variant="ghost" size="icon">
                    <PlusIcon className="w-6 h-6" />
                  </Button>
                </Link>
              </div>
            </Card>
            <Card className="p-4 bg-muted">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Comments</h2>
                <Link href="/admin/comments">
                  <Button variant="ghost" size="icon">
                    <PlusIcon className="w-6 h-6" />
                  </Button>
                </Link>
              </div>
            </Card>
            <Card className="p-4 bg-muted">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Categories</h2>
                <Link href="/admin/categories">
                  <Button variant="ghost" size="icon">
                    <PlusIcon className="w-6 h-6" />
                  </Button>
                </Link>
              </div>
            </Card>
            <Card className="p-4 bg-muted">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Tags</h2>
                <Link href="/admin/tags">
                  <Button variant="ghost" size="icon">
                    <PlusIcon className="w-6 h-6" />
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}

function ArrowLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}

function LogInIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <polyline points="10 17 15 12 10 7" />
      <line x1="15" x2="3" y1="12" y2="12" />
    </svg>
  );
}

function LogOutIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  );
}

function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
