interface Document {
  name: string
  desc: string
  file: string
  slug: string
}

export default function PreviewModal({ doc, onClose }: { doc: Document; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 bg-black/85 flex items-center justify-center z-[1000] p-4"
      onClick={onClose}
    >
      <div
        className="bg-surface border border-border-strong rounded-xl p-6 w-[90vw] max-w-[900px] h-[85vh] overflow-auto flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <div>
            <div className="text-[11px] text-accent tracking-[0.15em] uppercase mb-1 font-bold">Document Preview</div>
            <div className="font-bold text-base">{doc.name}</div>
          </div>
          <button
            onClick={onClose}
            className="bg-white/7 border-none text-white rounded-md px-3 py-2 cursor-pointer text-sm hover:bg-white/12 transition-colors"
          >
            Close
          </button>
        </div>
        <iframe
          src={`/previews/${doc.slug}-preview.html`}
          className="w-full border-none rounded-lg bg-white"
          style={{ height: 'calc(85vh - 80px)' }}
          title={`${doc.name} Preview`}
        />
        <p className="mt-3 text-xs text-white/30 text-center">
          Sample preview. Full editable document included in your purchase.
        </p>
      </div>
    </div>
  )
}
