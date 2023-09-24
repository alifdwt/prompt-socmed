import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Perintah</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} dan bagikan perintah AI kerenmu pada dunia, dan biarkan
        imajinasimu bermain dengan layanan kecerdasan buatan ini
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="fons-satoshi font-semibold text-base text-gray-700">
            Perintah AI-mu
          </span>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Ketikkan perintahmu di sini"
            required
            className="form_textarea"
          />
        </label>
        <label>
          <span className="fons-satoshi font-semibold text-base text-gray-700">
            Tagar&nbsp;
            <span className="font-normal">
              (#pemasaran, #pengembanganweb, #tugaskuliah)
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="#tagar"
            required
            className="form_input"
          />
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Batalkan
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
