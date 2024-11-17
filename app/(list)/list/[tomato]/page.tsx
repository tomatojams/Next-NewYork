import Books from "../../../../components/Books";
import { Suspense } from "react";

export default async function Movie({ params: { tomato } }: { params: { tomato: string } }) {
  return (
    <div>
      <Suspense fallback={<h3>Loading BooksInfo</h3>}>
        <Books tomato={tomato} />
      </Suspense>
    </div>
  );
}
