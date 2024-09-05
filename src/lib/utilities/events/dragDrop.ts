export type DragDropEventType = 'drop';

export function dragDrop(node: HTMLElement) {
    ['drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop'].forEach(function(event) {
        node.addEventListener(event, function(e) {
          e.preventDefault();
          e.stopPropagation();
        });
    });

    function handleFunction() {
        new CustomEvent('drag_drop', node as any);
    }

    node.addEventListener('dragover', handleFunction, false);
      
    node.addEventListener('dragleave', handleFunction, false);
      
      node.addEventListener('drop', handleFunction, true);

      return {
        destroy() {
            ['drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop'].forEach(function(event) {
                node.removeEventListener(event, handleFunction);
            });
        }
      }
}