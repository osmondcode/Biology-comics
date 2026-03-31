import os
import shutil

def cleanup():
    try:
        if os.path.exists('package-lock.json'):
            os.remove('package-lock.json')
            print('Deleted package-lock.json')
        if os.path.exists('node_modules'):
            shutil.rmtree('node_modules')
            print('Deleted node_modules')
    except Exception as e:
        print(f'Error: {e}')

if __name__ == '__main__':
    cleanup()
